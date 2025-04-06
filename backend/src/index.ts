import Fastify, { FastifyRequest, FastifyReply } from 'fastify'
import cors from '@fastify/cors'

interface SubscriptionPlan {
  id: number
  name: string
  price: number
  features: string[]
}

const fastify = Fastify({
  logger: true
})

// Configuração do CORS
await fastify.register(cors, {
  origin: true
})

// Mock de dados dos planos
const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 1,
    name: 'Básico',
    price: 29.90,
    features: ['Acesso básico', 'Suporte por email']
  },
  {
    id: 2,
    name: 'Pro',
    price: 59.90,
    features: ['Acesso completo', 'Suporte prioritário', 'Recursos avançados']
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 99.90,
    features: ['Acesso VIP', 'Suporte 24/7', 'Recursos personalizados', 'API dedicada']
  }
]

// Rota para obter planos de assinatura
fastify.get('/subscription-plans', async (request: FastifyRequest, reply: FastifyReply) => {
  return subscriptionPlans
})

// Rota de healthcheck
fastify.get('/health', async (request: FastifyRequest, reply: FastifyReply) => {
  return { status: 'ok' }
})

// Inicialização do servidor
try {
  await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
} 