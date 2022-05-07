import { useRouter } from '@uirouter/react';
import React, { useEffect } from 'react';
import { VerifyToken } from '../../Providers/VerifyProvider';

const IsLogin = () => {

    const isVerify = VerifyToken()
    const router = useRouter()

    useEffect(() => {
        if(!isVerify) {
            router.stateService.go('login')
        }

    //eslint-disable-next-line
    }, [])

    return <></>
};

export default IsLogin;