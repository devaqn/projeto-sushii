import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

interface QRCodeGeneratorProps {
  value: string
  size?: number
  className?: string
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ 
  value, 
  size = 200,
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const generateQR = async () => {
      if (canvasRef.current) {
        try {
          await QRCode.toCanvas(canvasRef.current, value, {
            width: size,
            margin: 2,
            color: {
              dark: '#0F0F0F', // Cor escura do tema
              light: '#FFFFFF', // Cor clara
            },
            errorCorrectionLevel: 'M'
          })
        } catch (error) {
          console.error('Erro ao gerar QR Code:', error)
        }
      }
    }

    generateQR()
  }, [value, size])

  return (
    <div className={`flex justify-center ${className}`}>
      <canvas 
        ref={canvasRef}
        className="rounded-lg shadow-lg border border-border"
      />
    </div>
  )
}

export default QRCodeGenerator