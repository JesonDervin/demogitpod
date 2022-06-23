FROM node:16-alpine

WORKDIR /app
# copy web api to current workdir
COPY /WebApi .

#Exposing web api port
EXPOSE 3000

RUN npm install

CMD npm run dev