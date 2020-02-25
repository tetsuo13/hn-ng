# HnNg

[![Actions Status](https://github.com/tetsuo13/hn-ng/workflows/Continuous%20integration/badge.svg)](https://github.com/tetsuo13/hn-ng/actions)

A [Hacker News](https://news.ycombinator.com/) clone written in Angular 9.

The way that the [Hacker News API](https://github.com/HackerNews/API) is structured doesn't lend itself well to fetching dozens or hundreds of comments since each comment requires a GET request. So a story with 100 comments would require 100 GET requests in order to fetch all comments.

Rather than using that API to be strictly dogmatic, the [HN Search API](https://hn.algolia.com/api) was used instead. This provided a more efficient means to fetching comments and allowed this app to be actually usuable without having to write our own backend API.
