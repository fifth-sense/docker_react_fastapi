FROM python:3.9
WORKDIR /backend-app
COPY ./requirements.txt /backend-app/requirements.txt
RUN pip3 install -r /backend-app/requirements.txt
COPY . /backend-app
ENV PYTHONPATH /app
CMD ["uvicorn", "todo.main:app","--host","0.0.0.0","--port","15400","--reload"]