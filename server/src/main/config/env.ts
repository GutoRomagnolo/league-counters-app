export default {
  port: process.env.PORT || 5050,
  postgresUrl: process.env.POSTGRES_URL || 'postgresql://postgres:league123@localhost:5432/league-toplane-counters?schema=public',
}

