'use client';

import { Icon } from '@/components/iconify-icon';
import { links } from '@/lib/constants/links';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { cn } from '@nextui-org/theme';
import type { HTMLAttributes } from 'react';

export default function Home() {
  return (
    <div
      className={cn(
        className,
        'mx-auto max-w-3xl flex flex-col text-center gap-4 md:gap-6'
      )}
    >
      <h1 className="w-full text-4xl md:text-5xl font-black tracking-tight">
        Java&統合版クロスプレイ
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            UrMoknCraft
          </span>
          Server
        </span>
      </h1>
      <div className="flex justify-center gap-2">
        <Button
          as={Link}
          href={links.abc}
          color="primary"
         // startContent={<Icon icon="solar:add-circle-bold" className="text-[24px]" />}
          isExternal
        >
          サーバーに参加
        </Button>
        <Button
          as={Link}
          href={links.abc}
        //  startContent={<Icon icon="solar:settings-bold" className="text-[24px]" />}
          isExternal
        >
          Discord
        </Button>
      </div>
    </div>
  );
}
