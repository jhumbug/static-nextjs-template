
module "cloudfront" {
  source = "../../modules/cloudfront"

  product         = local.product
  aliases         = [ "change-me.com", var.app_domain_name ]
  cert_domain     = "change-me.com"
  s3_origin       = aws_s3_bucket.site.bucket_regional_domain_name
}
