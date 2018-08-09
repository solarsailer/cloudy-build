# Cloudy Build - Service

## Rationale

The Unity Cloud Build API does not use CORS, which is problematic when you want to use it with a SPA. This serves as a proxy between Unity Cloud Build API and a front.

Each `micro` instance is a service that can be consumed by the front-end.
