// import { getCurrentUser } from '@/actions/auth';
import Agent from '@/components/Agent';
import React from 'react'

const InterviewPage = async () => {
    // const user = await getCurrentUser();
    return (
        <>
            <h3>Interview generation</h3>

            <Agent
                userName={"You"}
                userId={'user1'}
                type="generate" />
        </>
    )
}

export default InterviewPage