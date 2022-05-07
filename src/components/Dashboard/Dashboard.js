import { useRouter } from '@uirouter/react';
import { Button, Card } from 'antd';
import React from 'react';
import { VerifyToken } from '../../Providers/VerifyProvider';
import IsLogin from '../Util/IsLogin';

const Dashboard = () => {

    const isVerify = VerifyToken()
    const router = useRouter()
    

    if(!isVerify) {
        return <IsLogin />
    }

    return (
        <section className="app container">

            <Card style={{width: '100%'}}>
                <h1>
                    Welcome Back
                </h1>
            </Card>

            <Card style={{width: '30%', backgroundColor: "#bbbbbb", marginTop: '2rem'}}>
                <h2>Books Module</h2>
                <Button 
                    type='primary'
                    onClick={() => router.stateService.go('book')}
                >
                    See books
                </Button>
            </Card>

        </section>
    );
};

export default Dashboard;