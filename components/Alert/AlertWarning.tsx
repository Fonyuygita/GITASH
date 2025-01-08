"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const NavigationButton = (isDarkMode: { isDarkMode: boolean }) => {
    const router = useRouter();
    const [showDialog, setShowDialog] = useState(false);

    const handleNavigation = () => {
        setShowDialog(true);
    };

    const handleContinue = () => {
        setShowDialog(false);
        router.push('/');
    };

    return (
        <>
            <button
                onClick={handleNavigation}
                className="fixed top-[-3%] left-2 transition-transform hover:scale-105"
            >
                <Image
                    src="/l1.png"
                    alt="logo"
                    width={150}
                    height={150}
                />
            </button>

            <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent className={`${isDarkMode ? "bg-gray-800 text-lime-100" : "bg-white text-gray-800"}  dark:bg-gray-800`}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-xl font-semibold text-green-400 dark:text-gray-100">
                            Are you sure you want to leave?
                        </AlertDialogTitle>
                        <AlertDialogDescription className=" dark:text-gray-300">
                            Leaving this page will clear your current session and history.
                            Any unsaved progress will be lost. Are you sure you want to continue?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-900">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleContinue}
                            className="bg-green-600 hover:bg-green-700 text-white"
                        >
                            Yes, leave page
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default NavigationButton;