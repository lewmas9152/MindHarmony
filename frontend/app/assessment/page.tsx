"use client";

// "use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
// import {Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import { questions } from "@/lib/questions";
import {questions} from "@/lib/questions"

const FormSchema = z.object({
  ...Object.fromEntries(
    questions.map((q) => [
      q.id,
      z.string({ required_error: "Please select an answer." }),
    ])
  ),
});

const AssessmentForm: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: Object.fromEntries(questions.map((q) => [q.id, ""])),
  });

  useEffect(() => {
    const currentQuestionId = questions[currentQuestion].id;
    const savedAnswer = answers[currentQuestionId];
    if (savedAnswer) {
      form.setValue(
        currentQuestionId,
        savedAnswer
      );
    } else {
      form.setValue(currentQuestionId, "");
    }
  }, [currentQuestion, form, answers]);

  const saveCurrentAnswer = () => {
    const currentQuestionId = questions[currentQuestion].id;
    const currentAnswer = form.getValues(
      currentQuestionId
    );
    setAnswers((prev) => ({ ...prev, [currentQuestionId]: currentAnswer }));
  };

  const submitAllAnswers = async () => {
    console.log(JSON.stringify(answers));
    try {
      const response = await fetch("/api/submit-trivia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });

      if (response.ok) {
        alert("Quiz submitted successfully!");
      } else {
        alert("Failed to submit quiz. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleNavigation = async (direction: "next" | "submit") => {
    const currentQuestionId = questions[currentQuestion].id;
    const isValid = await form.trigger(
      currentQuestionId  
    );

    if (isValid) {
      saveCurrentAnswer();

      if (direction === "next" && currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else if (direction === "submit") {
        const allFieldsValid = await form.trigger();
        if (allFieldsValid) {
          await submitAllAnswers();
        } else {
          alert("Please answer all questions before submitting");
        }
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <Form {...form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>{currentQ.question}</CardTitle>
              <p>
                {currentQuestion + 1} of {questions.length}
              </p>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name={currentQ.id  }
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-col space-y-1"
                      >
                        {currentQ.choices.map((choice, index) => (
                          <FormItem
                            className="flex items-center space-x-3 space-y-0"
                            key={index}
                          >
                            <FormControl>
                              <RadioGroupItem value={choice} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {choice}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button
                type="button"
                onClick={handlePrevious}
                variant={"outline"}
                className="flex-1"
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>

              <Button
                type="button"
                onClick={() =>
                  handleNavigation(
                    currentQuestion < questions.length - 1 ? "next" : "submit"
                  )
                }
                className="flex-1 cursor:pointer disabled:cursor-not-allowed"
                disabled={
                  !form.getValues(
                    currentQ.id 
                  )
                }
              >
                {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default AssessmentForm;
