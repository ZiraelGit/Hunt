import { ComponentWithAs, IconProps, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface ColorHookResult{
    background: string
    changeMode: ComponentWithAs<"svg", IconProps>
    comColor: string
    btnHover: string
    fontBody: string
}

export const useColor = (): ColorHookResult => {
    const changeMode = useColorModeValue(MoonIcon, SunIcon);
    const background = useColorModeValue('#600000', '#9fffff');
    const comColor = useColorModeValue('#fff4bb', '#000b44');
    const btnHover = useColorModeValue('#b842e1', '#47bd1e');
    const fontBody = useColorModeValue('#ffecba', '#001345');

    return {
        background,
        changeMode,
        comColor,
        btnHover,
        fontBody
    };
};