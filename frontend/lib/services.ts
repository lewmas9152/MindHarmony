import AssessmentIcon from "@/app/images/line-md--clipboard-check-twotone.svg";
import CrisisIcon from "@/app/images/line-md--alert-square-twotone-loop.svg";
import TherapyIcon from "@/app/images/ri--psychotherapy-fill.svg";
import WellnessIcon from "@/app/images/hugeicons--wellness.svg";
import SupportIcon from "@/app/images/mingcute--group-3-fill.svg";
import CounselingIcon from "@/app/images/material-symbols--globe-asia-sharp.svg";
import MindfulnessIcon from "@/app/images/material-symbols--mindfulness-rounded.svg";
import MentalIcon from "@/app/images/line-md--heart-filled-half.svg"

export const services: Array<{
  id: number;
  title: string;
  details: string;
  icon: any;
  imageAlt: string;
}> = [
  {
    id: 1,
    title: "Mental Health Appointments with Professionals",
    details:
      "At MindHarmony, we provide personalized appointments with mental health professionals.",
    icon: MentalIcon,
    imageAlt: "Mental Health Icon",
  },

  {
    id: 2,
    title: "Assessment to Gauge Mental Health Capacity",
    details:
      "Our assessments are designed to evaluate your mental health capacity, providing insights.",
    icon: AssessmentIcon,
    imageAlt: "Assessment Icon",
  },

  {
    id: 3,
    title: "Crisis Intervention",
    details:
      " Our crisis intervention services offer immediate support and guidance during challenging mental health situations.",
    icon: CrisisIcon,
    imageAlt: "Crisis Intervention Icon",
  },

  {
    id: 4,
    title: "Therapy Sessions",
    details:
      " We offer both individual and group therapy sessions to help you navigate and manage your mental health challenges effectively.",
    icon: TherapyIcon,
    imageAlt: "Therapy Icon",
  },

  {
    id: 5,
    title: "Wellness Workshops",
    details:
      " Join our wellness workshops to learn practical skills and strategies for enhancing your mental well-being and resilience.",
    icon: WellnessIcon,
    imageAlt: "Wellness Icon",
  },

  {
    id: 6,
    title: "Support Groups",
    details:
      "Connect with others facing similar challenges through our supportive group sessions, fostering empathy and community.",
    icon: SupportIcon,
    imageAlt: "Support Icon",
  },
  {
    id: 7,
    title: "Online Counseling",
    details:
      "  Access our professional counseling services online, ensuring convenient and confidential support wherever you are.",
    icon: CounselingIcon,
    imageAlt: "Counselling Icon",
  },
  {
    id: 8,
    title: "Mindfulness Training",
    details:
      "Learn mindfulness techniques that promote relaxation, stress reduction, and overall mental well-being in our specialized training programs.",
    icon: MindfulnessIcon,
    imageAlt: "Mindfulness Icon",
  },
];
