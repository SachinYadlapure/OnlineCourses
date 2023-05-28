import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'100%'}>
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            children="@ SachinYadlapure"
            color={'yellow.400'}
            fontFamily={'body'}
            size={'sm'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize={'50'}
        >
          <a
            href="https://github.com/SachinYadlapure"
            target={'blank'}
            rel="git"
          >
            <DiGithub />
          </a>
          <a
            href="https://instagram.com/sachinyadlapure"
            target={'blank'}
            rel="insta"
          >
            <TiSocialInstagramCircular />
          </a>
          <a
            href="https://facebook.com/SachinYadlapure"
            target={'blank'}
            rel="fb"
          >
            <TiSocialFacebookCircular />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
