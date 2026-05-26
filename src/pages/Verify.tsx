import { RefreshCwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Field,
  FieldLabel,
} from "@/components/ui/field"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import z from "zod"
import { useLocation } from "react-router"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSentOtpMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"


const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

const Verify = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  const location = useLocation()
  const [email] = useState(location.state)
  const [confirm, setConfirm ] = useState(false)
  const [sentOtp] = useSentOtpMutation()

  const handleConfirm = async () =>{

    try {
     const res = await sentOtp({email:email}).unwrap()

     if(res.success){
       toast.success("otp sent successfully")
     }
   setConfirm(true)
   
    } catch(err){
      console.log(err)
    }
  
  }

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data)
  }

  return (
    <div>

     {
      confirm ? (
        <form onSubmit={form.handleSubmit(onSubmit)}>
      <Card className="mx-auto max-w-md m border-2 mt-16 border-primary">
        <CardHeader>
          <CardTitle className="text-center" >Verify OTP</CardTitle>
        </CardHeader>

        <CardContent>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="otp-verification">
                Verification code
              </FieldLabel>

              <Button type="button" variant="outline" size="sm">
                <RefreshCwIcon className="mr-2 h-4 w-4" />
                Resend Code
              </Button>
            </div>

            <Controller
              control={form.control}
              name="pin"
              render={({ field }) => (
                <InputOTP
                  maxLength={6}
                  id="otp-verification"
                  value={field.value}
                  onChange={field.onChange}
                >
                  <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>

                  <InputOTPSeparator className="mx-2" />

                  <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              )}
            />

            {form.formState.errors.pin && (
              <p className="text-sm text-red-500 mt-2">
                {form.formState.errors.pin.message}
              </p>
            )}
          </Field>
        </CardContent>

        <CardFooter>
          <Field>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </form>
      ) : (
 <Card className="mx-auto max-w-md m border-2 mt-16 border-primary">
        <CardHeader>
          <CardTitle className="text-center" > Verify Email Address</CardTitle>
        </CardHeader>

        <CardContent>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="otp-verification">
                We Will send you an OTP at <br/>
                <span className="font-bold">{email}</span>
              </FieldLabel>


            </div>

        </Field>
        </CardContent>

        <CardFooter>
          <Field>
            <Button onClick={handleConfirm} type="submit" className="w-full">
              Confirm
            </Button>
          </Field>
        </CardFooter>
      </Card>
      )
     }

    </div>
 
  )
}

export default Verify