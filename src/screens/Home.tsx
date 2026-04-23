import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Button, Select, Theme, View, XGroup, XStack, YStack } from 'tamagui'
import { Activity, Airplay } from '@tamagui/lucide-icons-2'

export default function Home() {
    const insert = useSafeAreaInsets();
    return (

        <YStack gap="$3" pt={insert.top} pb={insert.bottom} flex={1}>
            <Button>Plain</Button>
            <Button self="center" icon={Airplay} size="$6">
                Large
            </Button>
            <XStack gap="$2" justify="center">
                <Button size="$3" theme="accent">
                    Active
                </Button>
                <Button size="$3" variant="outlined">
                    Outlined
                </Button>
            </XStack>
            <XStack gap="$2" justify="center">
                <Theme name="accent">
                    <Button size="$3">
                        <Button.Icon>
                            <Activity />
                        </Button.Icon>
                        <Button.Text>Inverse</Button.Text>
                    </Button>
                </Theme>
                <Button iconAfter={Activity} size="$3">
                    iconAfter
                </Button>
            </XStack>

            <XGroup>
                <XGroup.Item>
                    <Button width={'50%'} size="$2" disabled opacity={0.5}>
                        disabled
                    </Button>
                </XGroup.Item>

                <XGroup.Item>
                    <Button width={'50%'} size="$2">
                        plain
                    </Button>
                </XGroup.Item>
            </XGroup>
        </YStack>


    )
}
