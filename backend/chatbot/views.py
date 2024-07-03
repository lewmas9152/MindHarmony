from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *

import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()


@csrf_exempt
def gpt_response(request):
    userinput = request.get('userinput')
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("API key not found.")

    client = OpenAI(api_key=api_key)

    class GenerateResponse:
        """
        Class to generate a response using OpenAI's GPT model.
        """

        def __init__(self, userinput) -> None:
            self._userInput = userinput
        
        def gpt(self):
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a helpful mental health assistant."},
                    {"role": "user", "content": self._userInput}
                ],
                max_tokens=150
            )
            return response.choices[0].message.content.strip()
    
    print(userinput)

