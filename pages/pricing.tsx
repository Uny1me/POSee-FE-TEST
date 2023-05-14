import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { CheckCircleOutline } from "@mui/icons-material";

type Props = {};

const Pricing = (props: Props) => {
  interface Tier {
    title: string;
    price: string;
    priceTerm: string;
    features: string;
    included: string;
    description: string[];
  }

  const [first, setfirst] = useState([
    {
      title: "SMB",
      price: "$79",
      priceTerm: "per month",
      features: "Basic features",
      included: "Everything in Basic features plus...",
      description: [
        "50 POC's",
        "2 integrations",
        "Onboarding + Email support",
        "Legal & Procurement features",
        "Unlimited customer invites",
      ],
    },
    {
      title: "Growth",
      price: "$99",
      priceTerm: "per month",
      features: "Basic features for up to 10 users",
      included: "Everything in SMB plus....",
      description: [
        "80 POC's",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB data per user",
        "Basic chat and email support",
      ],
    },
    {
      title: "Enterprise",
      price: "$199",
      priceTerm: "per month",
      features: "Advanced features and reporting",
      included: "Everything in Growth plus....",
      description: [
        "80 POC's",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB data per user",
        "Basic chat and email support",
      ],
    },
  ]);

  return (
    <Box
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        my: 12,
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: 600, textAlign: "center" }}
        gutterBottom
      >
        Pricing
      </Typography>

      <Typography
        variant="h4"
        sx={{ fontWeight: 600, textAlign: "center", mt: 2 }}
        gutterBottom
      >
        Plans that fit your scale
      </Typography>

      <Typography
        variant="h6"
        sx={{ fontWeight: 300, textAlign: "center", mt: 1 }}
        gutterBottom
      >
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </Typography>

      <Container maxWidth={"lg"} component="main" sx={{ mt: 12 }}>
        <Grid container spacing={5} alignItems="stretch">
          {first?.map((tier: Tier) => (
            <Grid item key={tier.title} xs={12} md={4}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0px 3px 8px rgba(0,0,0,0.2);",
                  p: 1,
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {tier.title}
                  </Typography>

                  <Box sx={{ alignItems: "flex-end", mt: 2 }}>
                    <Typography variant="h3" sx={{ fontWeight: 600 }}>
                      {tier.price}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 500, ml: 1, pb: 1 }}
                    >
                      {tier.priceTerm}
                    </Typography>
                  </Box>

                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 500, mt: 2 }}
                    gutterBottom
                  >
                    {tier.features}
                  </Typography>

                  <Stack spacing={2} sx={{ my: 4 }}>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        minHeight: "48px",
                        backgroundColor: "#006c6c",
                        "&:hover": {
                          backgroundColor: "#006c6c",
                        },
                        "&.MuiButton-contained": {
                          backgroundColor: "#006c6c",
                        },
                      }}
                      fullWidth
                    >
                      <Link
                        href={"/"}
                        underline="none"
                        sx={{ display: "inline-block", width: "100%" }}
                      >
                        <Typography variant="body1" sx={{ color: "#ffffff" }}>
                          Get Started
                        </Typography>
                      </Link>
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{ textTransform: "none", minHeight: "48px" }}
                      fullWidth
                    >
                      <Link
                        href={"/"}
                        sx={{ display: "inline-block", width: "100%" }}
                      >
                        <Typography variant="body1">Chat to Sales</Typography>
                      </Link>
                    </Button>
                  </Stack>

                  <Divider />

                  <Stack spacing={2} sx={{ mt: 4 }}>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, textTransform: "uppercase" }}
                    >
                      FEATURES
                    </Typography>

                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {tier.included}
                    </Typography>

                    <List dense>
                      {tier?.description?.map((item: string) => (
                        <ListItem key={item} sx={{ px: 0 }}>
                          <ListItemAvatar sx={{ minWidth: 0 }}>
                            <CheckCircleOutline
                              sx={{ fontSize: 20 }}
                              color={"primary"}
                            />
                          </ListItemAvatar>
                          <ListItemText sx={{ width: "100%", ml: 2 }}>
                            {item}
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
