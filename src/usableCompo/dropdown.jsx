import {
  Stack,
  Link,
  Box,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import {BsEmojiSmile} from 'react-icons/bs'

const CAT_ITEMS = [
  {
    label: "CATEGORY",
    children: [
      {
        label: "Make Up",
        subLabel: [
          {l:'face makeup',href:'facemakeup'},
          {l:'lip makeup',href:'lipmakeup'},
          {l:'nails',href:"nails"}
        ],
        href: "/product",
      },
      {
        label: "skin care",
        subLabel: [
          {l:'lip care',href:'lipcare'},
          {l:'eye care',href:'eyecare'},
          {l:'body care',href:'bodycare'}
        ],
        href: "/product",
      },
      {
        label: "Hair care",
        subLabel: [
          {l:'shampoo and conditioner',href:'shampoo'},
          {l:'hair styling',href:"hairstyling"},
          {l:'hair accessories',href:"hairaccessories"}
        ],
        href: "/product",
      },
    ],
  },
  {
    label: "BRANDS",
    children: [
      {
        label: "lakme",
        subLabel: [],
        href: "/lakme",
      },
      {
        label: "Good Vibes",
        subLabel: [],
        href: "/goodvibes",
      },
      {
        label: "maybeline",
        subLabel: [],
        href: "/maybeline",
      },
      {
        label: "NY bae",
        subLabel: [],
        href: "/nybae",
      },
      {
        label: "face canada",
        subLabel: [],
        href: "/facecanada",
      },
      {
        label: "purplle",
        subLabel: [],
        href: "/purplle",
      },
    ],
  },
  {
    label: "OFFERS",
    //   children: [
    //     {
    //       label: "Diabetes Monitoring",
    //       subLabel: [
    //         "Blood Glucose Monitors",
    //         "Test Strips & Lancets",
    //         "Syringes & Pens",
    //       ],
    //       href: "/medicine",
    //     },

    //     {
    //       label: "Diabetic Medicines",
    //       subLabel: ["Vitamins, Minerals & Antioxidants", "Homeopathy Medicines"],
    //       href: "/medicine",
    //     },
    //   ],
  },
  {
    label: "NEW",
    // children: [
    //   {
    //     label: "Diabetes Monitoring",
    //     subLabel: [
    //       "Blood Glucose Monitors",
    //       "Test Strips & Lancets",
    //       "Syringes & Pens",
    //     ],
    //     href: "/medicine",
    //   },

    //   {
    //     label: "Diabetic Medicines",
    //     subLabel: ["Vitamins, Minerals & Antioxidants", "Homeopathy Medicines"],
    //     href: "/medicine",
    //   },
    // ],
  },
  {
    label: "MAGAGINE",
    //   children: [
    //     {
    //       label: "Top brands in Healthcare Devices",
    //       subLabel: [
    //         "Dr. Morepen Devices",
    //         "Accu-chek",
    //         "OneTouch",
    //         "Omron",
    //       ],
    //       href: "/medicine",
    //     },
    //     {
    //       label: "Masks (N95, Surgical and more)",
    //       subLabel: [
    //         "Face Shield",
    //         "Kids Nutrition(2-15yrs",
    //         "Women Nutrition",
    //       ],
    //       href: "/medicine",
    //     },
    //   ],
  },

  {
    label: "ELITE OFFERS",
    //   children: [
    //     {
    //       label: "Sexual Wellness",
    //       subLabel: [
    //         "Condoms",
    //         "Lubricants & Massage Gels",
    //         "Personal body massagers",
    //         "Men Performance Enhancers",
    //         "Sexual Health Supplements"
    //       ],
    //       href: "/medicine",
    //     },
    //     {
    //       label: "Skin Care",
    //       subLabel: [
    //         "Body Lotions",
    //         "Kids Nutrition(2-15yrs",
    //         "Women Nutrition",
    //       ],
    //       href: "/medicine",
    //     },
    //   ],
  }
];

const credItem = [
  {
    label: "Sign in",
    children: {
      label: "sign in",
      sublebel: [
        {
          title: "new customer? click here",
          ref: ""
        },
        {
          title: "Your Orders",
          ref: ""
        },
        {
          title: "Your Account",
          ref: ""
        },
        {
          title: "your Wishlist",
          ref: ""
        },
      ]
    }
  }
]
export const Credential=()=>{
  const linkColor = useColorModeValue('gray.700', 'gray.100');
  const linkHoverColor = useColorModeValue('purple', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box fontFamily={'Clear Sans'} shadow="sm" display={{ base: 'none', md: "block" }} py="10px">
      <Stack direction={'row'} spacing={4} justify="center">
        {credItem.map((cred) => (
          <Box key={cred.label}>
            <Popover trigger='hover' placement={"bottom-start"}>
              <PopoverTrigger>
                <Link p={2}
                  href={cred.href ?? "#"}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                    borderBottom: '2px solid purple'
                  }}>
                  <BsEmojiSmile size="30" />
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

function Category() {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("purple", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      fontFamily={"Clear Sans"}
      shadow={"sm"}
      display={{ base: "none", md: "block" }}
      py="10px"
    >
      <Stack direction={"row"} spacing={4} justify="center">
        {CAT_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"md"}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                    borderBottom: '2px solid purple'
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  maxW={"min-content"}
                >
                  {navItem.children.map((child, i) => (
                    <SimpleGrid column={2} key={i}>
                      <DesktopSubNav {...child} />
                    </SimpleGrid>
                  ))}
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Flex fontSize="14px">
      <Box width={"max-content"}>
        <Link
          href={href}
          role={"group"}
          display={"block"}
          p={2}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            color: "purple",
          }}
          textAlign="left"
        >
          <Text transition={"all .3s ease"} fontWeight="700">
            {label}
          </Text>
        </Link>
        {subLabel.length
          ? subLabel.map((sl, i) => (
            <Link
              href={sl.href}
              role={"group"}
              display={"block"}
              p={2}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: "purple",
              }}
              textAlign="left"
              key={i}
            >
              <Text fontSize={"sm"}>{sl.l}</Text>
            </Link>
          ))
          : null}
      </Box>
    </Flex>
  );
};

export default Category;
