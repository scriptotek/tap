/*
 * Copyright (c) 2016-2018 original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 */

package io.heta.tap.pipelines.materialize

/**
  * Created by andrew@andrewresearch.net on 19/5/17.
  */

import akka.NotUsed
import akka.stream.scaladsl.{Keep, Sink, Source}
import akka.util.ByteString
import io.heta.tap.pipelines.materialize.PipelineContext.materializer

import scala.concurrent.Future


case class ByteStringPipeline(source:Source[ByteString,NotUsed], sink:Sink[ByteString,Future[Any]]) extends Pipeline {
  private val pipeline =  source.toMat(sink)(Keep.right)
  def run = pipeline.run()
}





