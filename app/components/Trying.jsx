'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

function Trying() {
    const { data: session } = useSession();
    return session?.user?.email === process.env.NEXT_PUBLIC_ENV_EMAIL;
}

export default Trying;
