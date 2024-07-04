from rest_framework.response import Response
from rest_framework.decorators import api_view
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from django.views.decorators.http import require_POST

import json
import os
from dotenv import load_dotenv
import openai
import httpx

load_dotenv()

class GenerateResponse:
    """
    Class to generate a response using OpenAI's GPT model.
    """

    def __init__(self, inputs: str, context: str) -> None:
        self._context = context
        self._inputs = inputs
    
    async def gpt(self) -> str:
        api_key = os.getenv("OPENAI_API_KEY")

        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
        }

        data = {
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "system", "content": f'You are a helpful mental health assistant. Provide {self._context}'},
                {"role": "user", "content": self._inputs}
            ],
            "max_tokens": 150
        }

        async with httpx.AsyncClient() as client:
            response = await client.post("https://api.openai.com/v1/chat/completions", headers=headers, json=data)
            response.raise_for_status()
            result = response.json()
            return result['choices'][0]['message']['content'].strip()
    

# @csrf_exempt
# @require_POST

@api_view(["GET", "POST"])
async def gpt_response(request):
    try:
        body = json.loads(request.body)
        userinput = body.get('input')
        
        if not userinput:
            return Response({"error": "input not provided"}, status=400)

        context = 'short response to the user to continue with the conversation'
        
        generate_response = GenerateResponse(userinput, context)
        gpt_output = await generate_response.gpt()

        return Response({"response": gpt_output})

    except json.JSONDecodeError:
        return Response({"error": "Invalid JSON"}, status=400)
    except httpx.HTTPStatusError as e:
        return Response({"error": str(e)}, status=e.response.status_code)
    except Exception as e:
        return Response({"error": str(e)}, status=500)
