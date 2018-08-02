# Gloomy Build

Micro Service for [Cloudy Build](https://github.com/solarsailer/cloudy-build/).

## Rationale

The Unity Cloud Build API does not use CORS, which is problematic when you want to use it with a SPA. This serves as a proxy between Unity Cloud Build API and a front. Gives access to the latest builds of an organization.
