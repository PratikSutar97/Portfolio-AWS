# terraform {
#   cloud {
#     organization = "ORGNAME"

#     workspaces {
#       name = "dev_tf_resources_ws"
#     }
#   }
# }

terraform {
  backend "s3" {
    bucket = "aws-devops-testbucket1997"
    key    = "dev.tfstate"
    region = "ap-south-1"
  }
}

