'use client';

import { useEffect, useState } from 'react';

type Status = 'loading' | 'ready' | 'error';

export default function GroupJoinPage() {
  const [status, setStatus] = useState<Status>('loading');
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const rawCode = params.get('code') ?? params.get('groupId');

      if (!rawCode) {
        setStatus('error');
        return;
      }

      setCode(rawCode);

      // Se chegou aqui via navegador, o sistema não abriu o app
      // via Universal/App Link. Tentamos abrir via deep link
      // banzai:// e, se não funcionar, caímos na loja.
      const ua = window.navigator.userAgent || '';
      const isIOS = /iPhone|iPad|iPod/i.test(ua);
      const isAndroid = /Android/i.test(ua);

      const deepLink = `banzai://group/invite?code=${encodeURIComponent(
        rawCode,
      )}`;

      // Tenta abrir o app imediatamente
      window.location.href = deepLink;

      // Se após um pequeno delay a página ainda estiver visível,
      // assumimos que o app não abriu e redirecionamos para a loja.
      const timeout = setTimeout(() => {
        if (document.visibilityState === 'visible') {
          if (isIOS) {
            window.location.replace('https://apps.apple.com/app/id6749553162');
          } else if (isAndroid) {
            window.location.replace(
              'https://play.google.com/store/apps/details?id=com.banzai.banzaiapp',
            );
          } else {
            setStatus('ready');
          }
        }
      }, 1500);

      // Em ambientes desktop mostramos a UI normal
      if (!isIOS && !isAndroid) {
        setStatus('ready');
      }

      return () => clearTimeout(timeout);

    } catch {
      setStatus('error');
    }
  }, []);

  const handleOpenApp = () => {
    if (!code) return;

    const deepLink = `banzai://group/invite?code=${encodeURIComponent(code)}`;
    window.location.href = deepLink;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        {status === 'loading' && (
          <>
            <h1 className="font-heading text-2xl font-semibold mb-4 text-foreground">
              Carregando convite...
            </h1>
            <p className="text-muted-foreground mb-6">
              Preparando o convite para o seu grupo no app Banzai
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
          </>
        )}

        {status === 'ready' && (
          <>
            <h1 className="font-heading text-2xl font-semibold mb-4 text-foreground">
              Convite para grupo
            </h1>
            <p className="text-muted-foreground mb-6">
              Para entrar neste grupo voce precisa do app Banzai instalado.
            </p>

            <button
              type="button"
              onClick={handleOpenApp}
              className="w-full mb-4 inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Abrir no app Banzai
            </button>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Ainda nao tem o app?
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://apps.apple.com/app/id6749553162"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-input rounded-lg text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Baixar para iOS
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.banzai.banzaiapp"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-input rounded-lg text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Baixar para Android
                </a>
              </div>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <h1 className="font-heading text-2xl font-semibold mb-4 text-destructive">
              Convite invalido
            </h1>
            <p className="text-muted-foreground mb-6">
              Nao foi possivel encontrar as informacoes deste convite.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Voltar ao inicio
            </a>
          </>
        )}
      </div>
    </div>
  );
}
