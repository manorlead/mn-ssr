FROM node:16-alpine as builder
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
COPY next.config.js .
COPY public ./public
COPY styles ./styles
RUN yarn install --frozen-lockfile
COPY ./ ./
RUN yarn build

####################################################### 
FROM alpine:3.14

RUN apk add supervisor npm nginx
RUN npm install --global pm2

RUN mkdir -p /var/log/supervisor && mkdir -p /etc/supervisor/conf.d

# Remove any existing config files
RUN rm /etc/nginx/nginx.conf

# Copy config files
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY package.json next.config.js ./
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules

# supervisor base configuration
ADD supervisor.conf /etc/supervisor.conf

CMD supervisord -c /etc/supervisor.conf