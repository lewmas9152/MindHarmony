.PHONY: install
install:
	pip install -r requirements.txt

.PHONY: migrate
migrate:
	python3 manage.py migrate

.PHONY: migrations
migrations:
	python3 manage.py makemigrations

.PHONY: run-server
run-server:
	python3 manage.py runserver

.PHONY: superuser
superuser:
	python3 manage.py createsuperuser
