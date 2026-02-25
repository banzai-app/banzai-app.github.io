'use client';

import { useEffect, useState } from 'react';

type Status = 'loading' | 'ready' | 'error';

export default function GroupJoinPage() {
  const [status, setStatus] = useState<Status>('loading');
  const [groupId, setGroupId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('groupId');

      if (!id) {
        setStatus('error');
        return;
      }

      // Se chegou aqui via navegador, o sistema já decidiu
      // que não vai abrir o app via Universal/App Link.
      // Então, em dispositivos móveis, redirecionamos direto
      // para a loja correspondente.
      const ua = window.navigator.userAgent || '';
      const isIOS = /iPhone|iPad|iPod/i.test(ua);
      const isAndroid = /Android/i.test(ua);

      if (isIOS) {
        window.location.replace('https://apps.apple.com/app/id6749553162');
        return;
      }

      if (isAndroid) {
        window.location.replace('https://play.google.com/store/apps/details?id=com.banzai.banzaiapp');
        return;
      }

      setGroupId(id);
      setStatus('ready');
    } catch {
      setStatus('error');
    }
  }, []);

  const handleOpenApp = () => {
    if (!groupId) return;

    const deepLink = `banzai://groups/join?groupId=${encodeURIComponent(groupId)}`;
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

