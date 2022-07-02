import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "./Navigation";

import { NativeBaseProvider, Box, HStack, Button, Text, Input, Heading, Link, VStack, FormControl } from "native-base";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase"

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [confirmPassword, setConfirmPassword] = useState(" ");


    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => { navigate("/home") })
            .catch(error => console.log(error))

    }

    const register = () => {
        console.log("the register btn is clicked");
        createUserWithEmailAndPassword(auth, email, password)
            .then(auth => { navigate("/home") })
            .catch(error => console.log(error))
    }

    return (
        <NativeBaseProvider>
            <Navigation />
            <Box safeArea flex={1} p={2} w="30%" mx="auto" my="50px">
                <Heading size="lg" color="emerald.500">
                    Welcome
                </Heading>
                <Heading color="white" size="xs">
                    Sign up to continue!
                </Heading>

                <VStack space={2} mt={5}>
                    <FormControl isRequired>
                        <FormControl.Label _text={{
                            color: "emerald.500",
                            fontSize: "sm",
                            fontWeight: 600
                        }}>
                            Email
                        </FormControl.Label>
                        <Input variant ="outline" _light={{
                            placeholderTextColor: "blueGray.400"
                        }} _dark={{
                            placeholderTextColor: "white"
                        }} onChange={(event) => setEmail(event.target.value)} bg={"white"} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label _text={{
                            color: "emerald.500",
                            fontSize: "sm",
                            fontWeight: 600
                        }}>
                            Password
                        </FormControl.Label>
                        <Input variant ="outline" _light={{
                            placeholderTextColor: "blueGray.400"
                        }} _dark={{
                            placeholderTextColor: "white"
                        }}onChange={(event) => setPassword(event.target.value)} type="password" bg={"white"} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label _text={{
                            color: "emerald.500",
                            fontSize: "sm",
                            fontWeight: 600
                        }}>
                            Confirm Password
                        </FormControl.Label>
                        <Input variant ="outline" _light={{
                            placeholderTextColor: "blueGray.400"
                        }} _dark={{
                            placeholderTextColor: "white"
                        }} onChange={(event) => setConfirmPassword(event.target.value)} type="password" bg="white" />
                    </FormControl>
                    <VStack space={2} mt={5}>
                        <Button onPress={register} variant="outline" _text={{
                            color: "white"
                        }}>
                            SignUp
                        </Button>

                    </VStack>
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
}