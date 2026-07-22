
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react";


  interface IProps {
     children:ReactNode;
     onConfirm:()=> void;
       title?: string;
      description?: string;
      confirmText?: string;
      cancelText?: string;
  }

export function DeleteConfirmation({children,
    title = "Are you absolutely sure?",
  description = "This action cannot be undone.",
  onConfirm}:IProps) {

 const handleConfirm = ()=>{
    onConfirm()
     console.log("Confirm click");
 }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button > {children} </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
          <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>

          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogHeader>
          {/* <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription> */}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
           onClick={handleConfirm}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
