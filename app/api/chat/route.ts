import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, systemPrompt, history } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
      return NextResponse.json(
        { 
          response: 'I apologize, but the chatbot is currently not configured. Please contact us directly at info@emeraldwindows.ie or call +353 1 234 5678 for assistance.' 
        },
        { status: 200 }
      )
    }

    // Only import OpenAI if API key is available
    const { default: OpenAI } = await import('openai')
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Prepare conversation history
    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...history.map((msg: any) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      })),
      { role: 'user' as const, content: message }
    ]

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 300,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.'

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { 
        response: 'I apologize, but I\'m having trouble connecting right now. Please contact us directly at info@emeraldwindows.ie or call +353 1 234 5678 for assistance.' 
      },
      { status: 200 }
    )
  }
} 