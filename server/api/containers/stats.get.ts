import { getContainerStats } from "~/server/services/containers/info"

export default defineEventHandler(async (event) => {
  const { close } = useSSE(event, "sse:containerStats")
  getContainerStats()
  event.node.req.on("close", () => close())
})