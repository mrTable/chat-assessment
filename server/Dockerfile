FROM python:3.7

ENV PYTHONUNBUFFERED=TRUE

RUN mkdir /app
WORKDIR /app

ADD requirements.txt /app/
RUN pip install -r requirements.txt

ADD . /app/
