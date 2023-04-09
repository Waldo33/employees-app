import { Refresh } from '@mui/icons-material';
import {
    Alert, AlertTitle, Box, IconButton,
} from '@mui/material';
import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                        <Alert
                            severity="error"
                            action={(
                                <IconButton
                                    onClick={() => window.location.reload()}
                                    color="inherit"
                                >
                                    <Refresh />
                                </IconButton>
                            )}
                        >
                            <AlertTitle>Непредвиденная ошибка</AlertTitle>
                            Попробуйте перезагрузить страницу...
                        </Alert>
                    </Box>
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
