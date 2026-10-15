import { Hono } from 'hono'
import { listProjects } from '../data/store'

const projects = new Hono()

projects.get('/', (c) => {
  const data = listProjects()
  return c.json(data)
})

export default projects
