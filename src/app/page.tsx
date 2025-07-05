"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"

export default function Home() {
  const { data: session } = authClient.useSession()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleCreateUser = async () => {
    await authClient.signUp.email(
      { email, password, name },
      {
        onError: (error) => {
          window.alert("Something went wrong")
          console.error(error)
        },
        onSuccess: () => {
          window.alert("User created successfully")
        },
      }
    )
  }

  const OnLogin = async () => {
    await authClient.signIn.email(
      { email, password },
      {
        onError: (error) => {
          window.alert("Something went wrong")
          console.error(error)
        },
        onSuccess: () => {
          window.alert("User created successfully")
        },
      }
    )
  }

  if (session) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <h1>Welcome {session.user?.name}</h1>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4 p-4">
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={OnLogin}>Login</Button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleCreateUser}>Create user</Button>
      </div>
    </div>
  )
}
