import { useTheme } from "@react-navigation/native";
import { KeyboardAvoidingView, View } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { Label, Text, Theme, YStack, Input, Button, XStack } from 'tamagui'

export const LoginForm = () => {
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const insert = useSafeAreaInsets();
    return (
        <YStack flex={1} p={'$3'} pt={insert.top} pb={insert.bottom} bg={'$background'} justify={'center'}>
            <KeyboardAvoidingView behavior="padding">
                <YStack items='flex-start' mb={'20%'}>
                    <Text fontSize={'$14'}>Decision</Text>
                </YStack>
                <YStack bg="$color" p={'$4'} borderRadius="$4" justify="center">
                    <Text color={'$color1'} fontSize={'$9'}>Đăng Nhập</Text>
                    <YStack mt={'$5'} gap={'$3'}>
                        <YStack>
                            <Label htmlFor="username" color={'$color1'}>Tên Tài Khoản</Label>
                            <Input id="username" value={username} onChangeText={(value) => setUserName(value)} placeholder="Nhập Tên Tài Khoản" backgroundColor="$background" color="$color1" borderColor="$color1" />
                        </YStack>
                        <YStack>
                            <Label htmlFor="password" color={'$color1'}>Mật Khẩu</Label>
                            <Input id="password" value={password} onChangeText={(value) => setPassword(value)} placeholder="Nhập Mật Khẩu" backgroundColor="$background" color="$color1" borderColor="$color1" />
                        </YStack>
                        <XStack justify="center" mt={'$5'}>
                            <Button>Đăng Nhập</Button>
                        </XStack>
                    </YStack>
                </YStack>
            </KeyboardAvoidingView>
        </YStack >
    )
}