# dockerfile imagen luomiseen sovelluksen ajamiseks devissä
# tällä hetkellä ei vielä tarvita koska halutaan ajaa sovellus
# lokaalisti ja pelkkä tietokanta containerissa

FROM node:16

USER node

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm ci

CMD npm run dev