import * as React from 'react'
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://projetoignite.marcelfeo.repl.co/api',
});
