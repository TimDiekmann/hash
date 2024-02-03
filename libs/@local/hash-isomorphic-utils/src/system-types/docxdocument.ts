/**
 * This file was automatically generated – do not edit it.
 */

import { Entity } from "@blockprotocol/graph";

import {
  BooleanDataType,
  DateTimeDataType,
  DescriptionPropertyValue,
  DisplayNamePropertyValue,
  DocumentFile,
  DocumentFileOutgoingLinkAndTarget,
  DocumentFileOutgoingLinksByLinkEntityTypeId,
  DocumentFileProperties,
  FileHashPropertyValue,
  FileNamePropertyValue,
  FileSizePropertyValue,
  FileStorageBucketPropertyValue,
  FileStorageEndpointPropertyValue,
  FileStorageForcePathStylePropertyValue,
  FileStorageKeyPropertyValue,
  FileStorageProviderPropertyValue,
  FileStorageRegionPropertyValue,
  FileURLPropertyValue,
  FileV2,
  FileV2OutgoingLinkAndTarget,
  FileV2OutgoingLinksByLinkEntityTypeId,
  FileV2Properties,
  MIMETypePropertyValue,
  NumberDataType,
  ObjectDataType,
  OriginalFileNamePropertyValue,
  OriginalSourcePropertyValue,
  OriginalURLPropertyValue,
  TextDataType,
  TextualContentPropertyValue,
  UploadCompletedAtPropertyValue,
} from "./shared";

export type {
  BooleanDataType,
  DateTimeDataType,
  DescriptionPropertyValue,
  DisplayNamePropertyValue,
  DocumentFile,
  DocumentFileOutgoingLinkAndTarget,
  DocumentFileOutgoingLinksByLinkEntityTypeId,
  DocumentFileProperties,
  FileHashPropertyValue,
  FileNamePropertyValue,
  FileSizePropertyValue,
  FileStorageBucketPropertyValue,
  FileStorageEndpointPropertyValue,
  FileStorageForcePathStylePropertyValue,
  FileStorageKeyPropertyValue,
  FileStorageProviderPropertyValue,
  FileStorageRegionPropertyValue,
  FileURLPropertyValue,
  FileV2,
  FileV2OutgoingLinkAndTarget,
  FileV2OutgoingLinksByLinkEntityTypeId,
  FileV2Properties,
  MIMETypePropertyValue,
  NumberDataType,
  ObjectDataType,
  OriginalFileNamePropertyValue,
  OriginalSourcePropertyValue,
  OriginalURLPropertyValue,
  TextDataType,
  TextualContentPropertyValue,
  UploadCompletedAtPropertyValue,
};

export type DOCXDocument = Entity<DOCXDocumentProperties>;

export type DOCXDocumentOutgoingLinkAndTarget = never;

export type DOCXDocumentOutgoingLinksByLinkEntityTypeId = {};

/**
 * A Microsoft Word document.
 */
export type DOCXDocumentProperties = DOCXDocumentProperties1 &
  DOCXDocumentProperties2;
export type DOCXDocumentProperties1 = DocumentFileProperties;

export type DOCXDocumentProperties2 = {};