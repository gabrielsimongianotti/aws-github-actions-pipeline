terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "~> 2.0"
    }
    null = {
      source  = "hashicorp/null"   
      version = "~> 3.0"
    }
  }
}

resource "aws_s3_bucket" "bucket-images" {
  bucket        = var.bucket_name
  force_destroy = true
  tags = {
    Name = "files"
  }
}
