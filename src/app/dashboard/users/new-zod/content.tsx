"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addUserZod } from "@/lib/actions";
import { CreateUserRequest, CreateUserValidator } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {}

const Content: FC<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<CreateUserRequest>({
    resolver: zodResolver(CreateUserValidator),
    defaultValues: {
      isAdmin: false,
      isActive: true,
    },
  });

  const { setError } = form;

  const submit = async (payload: CreateUserRequest) => {
    try {
      const resp = await addUserZod(payload);

      if (resp && !resp.success) {
        if (resp.isValidationError) {
          toast.error(resp.message);
          Object.entries(resp.errors).forEach((er) => {
            // @ts-ignore
            setError(er[0], {
              message: er[1],
            });
          });
        } else {
          toast.error("Could not add user", { description: "Try again." });
        }
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error?.message, {
        description: "Try again.",
      });
    }
  };

  return (
    <div>
      <Card>
        <CardContent className="space-y-4 pt-6">
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit((e) => submit(e))}
            >
              <div className="grid md:grid-cols-2 md:gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="phone" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isAdmin"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Is Admin?</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Is Active?</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Address" rows={2} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button
                  isLoading={isLoading}
                  size="lg"
                  type="submit"
                  className="w-full"
                >
                  Save
                  <ChevronRight className="pl-2" />
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Content;
