import Fastify, { FastifyRequest, FastifyReply } from 'fastify'
import cors from '@fastify/cors'

interface SubscriptionPlan {
  id: number
  name: string
  description: string
  price: number
  features: string[]
}

interface ContactMessage {
  name: string
  email: string
  message: string
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
    name: 'Plano Inicial',
    description: 'Para freelancers e fundadores solo que precisam do essencial.',
    price: 29,
    features: [
      'Até 10 faturas por mês',
      '2 contas conectadas',
      'Visão financeira geral'
    ]
  },
  {
    id: 2,
    name: 'Plano Profissional',
    description: 'Para times em crescimento que precisam de mais flexibilidade.',
    price: 69,
    features: [
      'Até 50 faturas por mês',
      'Gestão de clientes',
      'Exportação CSV & relatórios'
    ]
  },
  {
    id: 3,
    name: 'Plano Enterprise',
    description: 'Para empresas maiores que precisam de máxima flexibilidade.',
    price: 99,
    features: [
      'Faturas ilimitadas',
      'Gestão de conta pessoal',
      'Relatórios completos'
    ]
  }
]

// Rota para obter planos de assinatura
fastify.get('/subscription-plans', async (request: FastifyRequest, reply: FastifyReply) => {
  return subscriptionPlans
})

// Rota para enviar mensagem de contato
fastify.post('/contact', async (request: FastifyRequest<{
  Body: ContactMessage
}>, reply: FastifyReply) => {
  const { name, email, message } = request.body
  
  fastify.log.info(`Nova mensagem de contato recebida de ${name} (${email})`)
  
  return {
    success: true,
    message: 'Mensagem recebida com sucesso'
  }
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