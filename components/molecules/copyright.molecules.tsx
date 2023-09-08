import { ENDPOINT } from '@/libs/endpoints'
import { Typography, TypographyProps } from '@mui/material'
import Link from 'next/link'

export const Copyright = (props: TypographyProps) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href={`${ENDPOINT.UI_BASE_URL}/`}>
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  )
}
