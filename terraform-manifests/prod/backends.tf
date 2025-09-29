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
    bucket = "aws-devops-testbucket"
    key    = "terraformstates/prod.tfstate"
    region = "us-east-1"
  }
}
