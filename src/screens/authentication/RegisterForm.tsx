import { useState } from "react";
import { Alert, KeyboardAvoidingView } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Label, Text, YStack, Input, Button, XStack } from 'tamagui'
import auth from "@react-native-firebase/auth"

export const RegisterForm = () => {
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const insert = useSafeAreaInsets();
    const handleRegister = async () => {
        try {
            if (!username || !password || !confirmPassword) {
                Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin");
                return;
            }
            if (password !== confirmPassword) {
                Alert.alert("Thông báo", "Mật khẩu không khớp");
                return;
            }
            const result = await auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error?.message)
        }
    }
    return (
        <YStack flex={1} p={'$3'} pt={insert.top} pb={insert.bottom} bg={'$background'} justify={'center'}>
            <KeyboardAvoidingView behavior="padding">
                <YStack items='flex-start' mb={'20%'}>
                    <Text fontSize={'$14'}>Decision</Text>
                </YStack>
                <YStack bg="$color" p={'$4'} borderRadius="$4" justify="center">
                    <Text color={'$color1'} fontSize={'$9'}>Đăng Ký</Text>
                    <YStack mt={'$5'} gap={'$3'}>
                        <YStack>
                            <Label htmlFor="email" color={'$color1'}>Email</Label>
                            <Input id="email" value={email} onChangeText={(value) => setEmail(value)} placeholder="Nhập Email" backgroundColor="$background" color="$color1" borderColor="$color1" />
                        </YStack>
                        <YStack>
                            <Label htmlFor="username" color={'$color1'}>Tên Tài Khoản</Label>
                            <Input id="username" value={username} onChangeText={(value) => setUserName(value)} placeholder="Nhập Tên Tài Khoản" backgroundColor="$background" color="$color1" borderColor="$color1" />
                        </YStack>
                        <YStack>
                            <Label htmlFor="password" color={'$color1'}>Mật Khẩu</Label>
                            <Input id="password" secureTextEntry={true} value={password} onChangeText={(value) => setPassword(value)} placeholder="Nhập Mật Khẩu" backgroundColor="$background" color="$color1" borderColor="$color1" />
                        </YStack>
                        <YStack>
                            <Label htmlFor="confirm-password" color={'$color1'}>Xác Nhận Mật Khẩu</Label>
                            <Input id="confirm-password" secureTextEntry={true} value={confirmPassword} onChangeText={(value) => setConfirmPassword(value)} placeholder="Xác Nhận Mật Khẩu" backgroundColor="$background" color="$color1" borderColor="$color1" />
                        </YStack>
                        <XStack justify="center" mt={'$5'}>
                            <Button onPress={handleRegister}>Đăng Ký</Button>
                        </XStack>
                    </YStack>
                </YStack>
            </KeyboardAvoidingView>
        </YStack >
    )
}