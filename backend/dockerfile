FROM python:3.10.14-alpine3.19

WORKDIR /backend

COPY . .

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "mental_health_support.wsgi:application"]