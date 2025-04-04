import { getCurrentUser } from '@/actions/auth';
import Agent from '@/components/Agent';
import React from 'react'

const InterviewPage = async () => {
    const user = await getCurrentUser();
    return (
        <>
            <h3>Interview generation</h3>
            {user && (
                <Agent
                    userName={user.name}
                    userId={user.id}
                    type="generate" />
            )}
        </>
    )
}

export default InterviewPage