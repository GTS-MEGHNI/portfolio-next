# ────────────────────────────────────────────
# Stage 1 – Install dependencies
# ────────────────────────────────────────────
FROM oven/bun:1-alpine AS deps
WORKDIR /app

RUN apk add --no-cache ca-certificates

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ────────────────────────────────────────────
# Stage 2 – Build
# ────────────────────────────────────────────
FROM oven/bun:1-alpine AS builder
WORKDIR /app

RUN apk add --no-cache ca-certificates

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run next build --webpack

# ────────────────────────────────────────────
# Stage 3 – Production runner
# ────────────────────────────────────────────
FROM oven/bun:1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["bun", "server.js"]