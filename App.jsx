import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-green-700">
          Peacecoin Gateway DApp
        </h1>

        <Card>
          <CardContent className="space-y-4">
            <p className="text-green-800 font-semibold">Connect your wallet to begin:</p>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Connect Wallet
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <p className="text-green-800 font-semibold">Send Payment (PSCN)</p>
            <Input placeholder="Enter amount in PSCN" className="w-full" />
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Pay with Peacecoin
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-sm text-gray-500 text-center">
              Powered by PeaceNation | Built by Mino & Boko
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}