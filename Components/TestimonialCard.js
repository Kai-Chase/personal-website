import { Box, TagLabel, Tag, HStack } from "@chakra-ui/react"
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Work.module.css'

//testimonial data structure
// Testimonial {quote: string, name: string}

const TestimonialCard = ({ testimonial, currentTheme }) => {

    return (
        <div style={{ whiteSpace: 'initial' }}>
            <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
                <Box p="6">
                    <Box as="span" color={currentTheme.subtext} fontSize="sm" >
                        {testimonial.quote.replace(/(<([^>]+)>)/ig, '')}
                    </Box>
                    <Box
                        mt="1"
                        as="h4"
                        lineHeight="tight"
                    >
                        {testimonial.name}
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default TestimonialCard 
