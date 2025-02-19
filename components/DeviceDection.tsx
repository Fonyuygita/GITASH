
"use client"
import React, { useEffect, useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '@/components/ui/alert-dialog';
import { Monitor, Smartphone, TabletSmartphone } from 'lucide-react';

const DeviceDetectionPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const checkDevice = () => {
            const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );
            setIsOpen(isMobileOrTablet);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    if (!isMounted) return null;

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent className="max-w-md mx-4">
                <AlertDialogHeader>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                        <Smartphone className="w-8 h-8 text-red-500" />
                        <TabletSmartphone className="w-8 h-8 text-red-500" />
                        <Monitor className="w-8 h-8 text-green-500" />
                    </div>
                    <AlertDialogTitle className="text-2xl font-bold text-center mb-2">
                        Desktop Experience Recommended
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center space-y-4">
                        <p className="text-lg">
                            GITASH is optimized for desktop computers to provide the best learning experience for command-line interfaces and development tools.
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                            <p className="text-amber-800 font-medium">
                                While you can browse the content on mobile devices, we strongly recommend using a personal computer for:
                            </p>
                            <ul className="mt-2 text-amber-700 text-sm space-y-1">
                                <li>• Hands-on practice with command-line interfaces</li>
                                <li>• Following along with coding tutorials</li>
                                <li>• Completing interactive exercises</li>
                                <li>• Optimal viewing of technical content</li>
                            </ul>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                            For the full interactive learning experience, please visit GITASH on your desktop or laptop computer.
                        </p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeviceDetectionPopup;